<template>
  <div>
    <div class="text-center q-mt-lg">
      <small class="answer block full-width" style="color: #F59A8C;"
        >Criando sua conta...</small
      >
    </div>
    <h5 class="text-center">Por favor, insira sua senha:</h5>
    <form @submit.prevent="goToNextStep">
      <div class="content absolute-center text-center">
        <q-input
          v-model="password"
          type="password"
          color="white"
          maxlength="24"
          dark
        />
      </div>
      <div class="footer absolute-bottom q-px-lg q-mb-xl">
        <q-btn
          :disabled="isSending"
          rounded
          type="submit"
          text-color="primary"
          color="white"
          class="full-width q-mt-xl"
          label="PROXIMA"
          style="height:45px;"
        >
          <q-icon
            class="absolute-right q-ma-sm"
            name="keyboard_arrow_right"
            size="30px"
          />
        </q-btn>
      </div>
    </form>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Error!</div>
        </q-card-section>

        <q-card-section
          >Por favor, preencha o campo corretamente.</q-card-section
        >

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      alert: false,
      sending: false
    };
  },
  computed: {
    ...mapGetters("register", [
      "name",
      "email",
      "address",
      "kilograms",
      "bloodType",
      "hasInfection",
      "wantGetNotification",
      "wantShareData"
    ]),
    password: {
      get() {
        return this.$store.state.register.password;
      },
      set(value) {
        this.$store.commit("register/setPassword", value);
      }
    },
    isSending() {
      return this.sending;
    }
  },
  methods: {
    //Method to validate our form.
    validateForm() {
      if (this.password && this.password > 3) {
        return true;
      }
      return false;
    },
    //Go to next page
    goToNextStep() {
      if (this.validateForm()) {
        this.sending = true;
        this.$store
          .dispatch("register/signUp", {
            name: this.name,
            password: this.password,
            email: this.email,
            address: this.address,
            kilograms: this.kilograms,
            bloodType: this.bloodType,
            hasInfection: this.hasInfection,
            wantGetNotification: this.wantGetNotification,
            wantShareData: this.wantShareData
          })
          .then(() => {
            console.log("Usuario Criado com sucesso.");
            this.sending = false;
            this.$router.push("/");
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        this.alert = true;
      }
    }
  }
};
</script>
<style lang="stylus">
.content {
  width: 250px;
}
</style>
