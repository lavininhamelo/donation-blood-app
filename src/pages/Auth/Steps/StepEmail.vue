<template>
  <div>
    <div class="text-center q-mt-lg">
      <small class="answer block full-width" style="color: #F59A8C;">Criando sua conta...</small>
    </div>
    <h5 class="text-center">Por favor, insira seu email:</h5>
    <form @submit.prevent="goToNextStep">
      <div class="content absolute-center text-center">
        <q-input v-model="email" type="email" color="white" dark />
      </div>
      <div class="footer absolute-bottom q-px-lg q-mb-xl">
        <q-btn
          rounded
          type="submit"
          text-color="primary"
          color="white"
          class="full-width q-mt-xl"
          label="PROXIMA"
          style="height:45px;"
        >
          <q-icon class="absolute-right q-ma-sm" name="keyboard_arrow_right" size="30px" />
        </q-btn>
      </div>
    </form>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Error!</div>
        </q-card-section>

        <q-card-section>Por favor, preencha o campo corretamente.</q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      alert: false
    };
  },
  computed: {
    email: {
      get() {
        return this.$store.state.register.email;
      },
      set(value) {
        this.$store.commit("register/setEmail", value);
      }
    }
  },
  methods: {
    //Method to validate our form.
    validateForm() {
      if (this.email && this.email.length > 3) {
        return true;
      }
      return false;
    },
    //Go to next page
    goToNextStep() {
      if (this.validateForm()) {
        this.$router.push("/register/step/success/password");
      } else {
        this.alert = true;
      }
    }
  }
};
</script>
<style lang="stylus" >
.content {
  width: 250px;
}
</style>
