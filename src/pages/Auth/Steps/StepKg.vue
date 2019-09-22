<template>
  <div>
    <div class="text-center q-mt-xl">
      <small class="answer block full-width" style="color: #F59A8C;">Pergunta 3 / 10</small>
      <h5>Quanto KG você pesa, aproximadamente?</h5>
    </div>
    <form @submit.prevent="goToNextStep">
      <div class="content absolute-center text-center">
        <q-input type="number" v-model="kilograms" color="white" maxlength="24" suffix="KG" dark />
      </div>
      <div class="footer absolute-bottom q-px-lg q-mb-xl">
        <q-btn
          type="submit"
          rounded
          text-color="primary"
          color="white"
          class="full-width q-mt-xl"
          label="PROXIMA"
          style="height:45px;"
          @click="goToNextStep()"
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
        this.$router.push("4");
      } else {
        this.alert = true;
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.content {
  min-width: 250px;
}

.answer {
  color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  text-transform: uppercase;
}
</style>
