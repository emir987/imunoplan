<template>
  <div
    class="modal fade"
    tabindex=" -1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    id="save-recipe"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title margin-auto w-100 text-center">Moj plan</h4>
        </div>
        <div class="modal-body">
          <div class="calendar-header">
            <div
              class="day-name"
              v-for="(day, index) in calendar_header"
              :key="index"
            >
              {{ day }}
            </div>
          </div>
          <div class="calendar-body">
            <div
              ref="day"
              class="day"
              v-for="(day, index) in days"
              :key="index"
              @click="addSelected(index + 1, $event)"
              :class="{ reserved: day.reserved }"
            >
              {{ index + 1 }}
            </div>
          </div>
          <!-- <label for="name" class="col-sm-3 col-form-label">Kalorije</label> -->
          <input
            type="text"
            id="name"
            v-model="name"
            placeholder="Upiši naziv novog plana"
            class="mb-2 form-control"
          />
          <div class="d-flex mb-3">
            <button class="button-green" @click="add()">Dodaj</button>
            <button class="button-cancel mt-auto" @click="deleteDay()">
              Obriši
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id_user: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      calendar_header: ["Pon", "Uto", "Sri", "Četv", "Pet", "Sub", "Ned"],
      days: [],
      plan: [],
      dayActive: [],
      arraySelected: [],
      name: "",
      schedule: [],
    };
  },
  beforeCreate() {},
  created() {
    Event.$on("openSaveRecipeModal", (plan) => {
      $("#save-recipe").modal("show");
      this.plan = plan;
    });
  },
  mounted() {
    axios
      .get("./api/schedule")
      .then((response) => {
        console.log(response);
        // handle success
        this.schedule = response.data;

        for (const day of this.schedule) {
          this.dayActive.push(day.toString());
        }
        setTimeout(() => {
          for (let index = 1; index <= 28; index++) {
            console.log(this.dayActive.includes("1"));
            if (this.dayActive.includes(index.toString())) {
              this.days.push({ reserved: true });
            } else {
              this.days.push({ reserved: false });
            }
            this.arraySelected.push({ selected: false });
          }
        }, 1000);
        setTimeout(() => {
          this.makeSelection();
        }, 2000);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },
  methods: {
    makeSelection() {
      for (const day of this.$refs.day) {
        if (day.classList.contains("reserved")) {
          day.innerHTML += `<img src="/assets/plan/key.svg" alt="" />`;
        }
      }
      $("#save-recipe").on("shown.bs.modal", function () {
        $(document).off("focusin.modal");
      });
    },
    refreshSelected() {
      for (let index = 0; index < 28; index++) {
        this.arraySelected[index].selected = false;
        this.$refs.day[index].classList.remove("selected");
      }
    },
    addSelected(day, event) {
      if (this.arraySelected[day - 1].selected == true) {
        event.currentTarget.classList.remove("selected");
        this.arraySelected[day - 1].selected = false;
        return;
      }
      event.currentTarget.classList.add("selected");
      this.arraySelected[day - 1].selected = true;
    },
    deleteDay() {
      const swal = require("sweetalert2");
      if (this.id_user == 0) {
        swal
          .fire({
            title: "Niste prijavljeni",
            text:
              "Da biste koristili ovu funkciju morate biti prijavljeni na sistem.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#60B87A",
            cancelButtonColor: "#f84141",
            confirmButtonText: "Prijavi se!",
            cancelButtonText: "Otkaži!",
          })
          .then((result) => {
            if (result.isConfirmed) {
              window.location = "/login";
            }
          });
        return;
      }

      let selected = [];
      for (let index = 0; index < this.$refs.day.length; index++) {
        if (this.days[index].reserved == false) {
          this.arraySelected[index].selected = false;
          this.$refs.day[index].classList.remove("selected");
        }

        if (this.arraySelected[index].selected == true) {
          selected.push(index);
          this.days[index].reserved = false;
          this.$refs.day[index].classList.remove("reserved");

          this.$refs.day[index].innerHTML = index + 1;

          axios
            .delete(`./api/schedule/${index + 1}`)
            .then((response) => {
              this.refreshSelected();
            })
            .catch(function (error) {
              console.log(error);
            });

          swal.fire("Sačuvano!", "Uspjesno obrisano.", "success");
        }
      }
    },
    add() {
      const swal = require("sweetalert2");

      if (this.id_user == 0) {
        swal
          .fire({
            title: "Niste prijavljeni",
            text:
              "Da biste koristili ovu funkciju morate biti prijavljeni na sistem.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#60B87A",
            cancelButtonColor: "#f84141",
            confirmButtonText: "Prijavi se!",
            cancelButtonText: "Otkaži!",
          })
          .then((result) => {
            if (result.isConfirmed) {
              window.location = "/login";
            }
          });
        return;
      }
      let sendUpdate = [];
      let sendImport = [];
      let once = true;

      for (let index = 0; index < this.$refs.day.length; index++) {
        if (this.arraySelected[index].selected == true) {
          if (this.days[index].reserved == true) {
            sendUpdate.push(index + 1);
          } else {
            sendImport.push(index + 1);
          }
        }
      }
      for (let index = 0; index < this.$refs.day.length; index++) {
        if (this.arraySelected[index].selected == true) {
          // this.$refs.day[index].classList.add("pointer");
          if (this.days[index].reserved == true) {
            swal
              .fire({
                title: "Sigurni ste da želite zamjenu?",
                text: "Ako zamjenite stari sačuvani dan nećete moći vratiti!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#60B87A",
                cancelButtonColor: "#f84141",
                confirmButtonText: "Zamjeni!",
                cancelButtonText: "Otkaži!",
              })
              .then((result) => {
                if (result.isConfirmed) {
                  axios
                    .patch(`/api/schedule/${index + 1}`, {
                      name: this.name,
                      days: JSON.stringify(sendUpdate),
                      plan: this.plan,
                    })
                    .then((response) => {
                      this.refreshSelected();
                    })
                    .catch(function (error) {
                      console.log(error);
                    });

                  swal.fire(
                    "Sačuvano!",
                    "Vaša izmjena je sačuvana.",
                    "success"
                  );
                }
              });
          } else if (once) {
            once = false;
            axios
              .post("./api/schedule", {
                days: JSON.stringify(sendImport),
                name: this.name,
                plan: this.plan,
              })
              .then(() => this.refreshSelected())
              .catch(function (error) {
                console.log(error);
              });
            for (const key of sendImport) {
              this.$refs.day[key - 1].classList.add("reserved");

              this.$refs.day[
                key - 1
              ].innerHTML += `<img src="/assets/plan/key.svg" alt="" />`;
            }
          }
        }
      }
      for (const key of sendImport) {
        this.days[key - 1].reserved = true;
      }
    },
  },
};
</script>

<style >
</style>
