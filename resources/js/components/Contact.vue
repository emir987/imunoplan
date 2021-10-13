<template>
  <div class="body-form">
    <form>
      <div class="contact-title">Kontaktirajte nas</div>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          v-model="email"
          id="email"
          placeholder="Email adresa"
          ref="email"
          v-on:input="emailValidate()"
          :disabled="isDisabled"
        />
      </div>
      <div class="form-group">
        <textarea
          class="form-control"
          placeholder="Poruka"
          id="message"
          v-model="message"
          ref="message"
          rows="5"
          v-on:input="messageValidation()"
        ></textarea>
      </div>
      <button
        :disabled="loading"
        @click.prevent="send()"
        id="send"
        class="button-gray w-50"
      >
        Pošalji
        <div :class="{ loaderWhite: loading }"></div>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["registered_email"],
  data() {
    return {
      email: "",
      message: "",
      isDisabled: "false",
      loading: false,
    };
  },
  methods: {
    emailValidate: function () {
      var pattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
      let validation = this.email.match(pattern) ? true : false;
      return this.inputRed(this.$refs.email, validation);
    },
    messageValidation: function () {
      let validation =
        this.message.length > 5 && this.message.match(/^ *$/) === null
          ? true
          : false;
      return this.inputRed(this.$refs.message, validation);
    },
    inputRed: function (input, validation) {
      if (validation) {
        input.style.borderColor = "green";
        return true;
      } else {
        input.style.borderColor = "red";
        return false;
      }
    },

    send() {
      const swal = require("sweetalert2");
      if (
        this.emailValidate() == false ||
        this.email == "" ||
        this.message == "" ||
        this.messageValidation() == false
      ) {
        console.log(this.nameValidate);
        swal.fire({
          icon: "error",
          title: "Niste dobro unijeli podatke",
          text: "Provjerire polja ako ste preskočili ili su crvene boje!",
        });
        return;
      }

      this.loading = true;

      axios({
        method: "post",
        url: "./api/message",
        data: {
          message: this.message,
          email: this.email,
        },
        validateStatus: (status) => {
          return true; // I'm always returning true, you may want to do it depending on the status received
        },
      })
        .catch((error) => {
          console.log(error);
        })
        .then((response) => {
          console.log(response);
          this.loading = false;

          swal.fire({
            icon: "success",
            title: "Uspješno poslato.",
            text: "Registrovanim korisnicima poruke će biti sačuvane u inbox",
            showConfirmButton: false,
            timer: 8000,
          });
          // document.getElementById("send").disabled = false;
        });
    },
  },
  created() {
    if (typeof this.registered_email !== "undefined") {
      this.email = this.registered_email;
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  },
};
</script>
