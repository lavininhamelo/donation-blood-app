<template>
  <div>
    <div class="text-center q-mt-lg">
      <small
        class="answer block full-width"
        style="color: #F59A8C;"
      >Pergunta 3 / {{this.$store.state.register.totalAswners}}</small>
    </div>
    <h5 class="text-center">Quantos KG você pesa, atualmente?</h5>

    <form @submit.prevent="goToNextStep">
      <div class="content text-center">
        <q-input type="number" v-model="kilograms" color="white" maxlength="24" suffix="KG" dark />
      </div>
      <div class="footer absolute-bottom q-px-lg q-mb-lg">
        <q-btn
          type="submit"
          rounded
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
    kilograms: {
      get() {
        return this.$store.state.register.kilograms;
      },
      set(value) {
        this.$store.commit("register/setKilograms", value);
      }
    }
  },
  methods: {
    //Method to validate our form.
    validateForm() {
      if (this.kilograms && this.kilograms > 0) {
        return true;
      }
      return false;
    },
    //Go to next page
    goToNextStep() {
      if (this.validateForm()) {
        this.$router.push("/register/step/4");
      } else {
        this.alert = true;
      }
    }
  }
};
</script>
