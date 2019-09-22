<template>
  <div>
    <div class="text-center q-mt-xl">
      <small class="answer block full-width" style="color: #F59A8C;">Pergunta 2 / 10</small>
      <h5>Qual seu tipo sanguíneo?</h5>
    </div>
    <form @submit.prevent="goToNextStep">
      <div class="content absolute-center text-center">
        <SelectesBlood />
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

        <q-card-section>Por favor, selecione seu tipo sanguíneo.</q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import SelectesBlood from "../../../components/SelectsBlood.vue";

export default {
  components: { SelectesBlood },
  data() {
    return {
      alert: false
    };
  },
  computed: {
    bloodType: {
      get() {
        return this.$store.state.register.bloodType;
      }
    }
  },
  methods: {
    //Method to validate our form.
    validateForm() {
      if (this.bloodType) {
        return true;
      }
      return false;
    },
    //Go to next page
    goToNextStep() {
      if (this.validateForm()) {
        this.$router.push("/register/step/3");
      } else {
        this.alert = true;
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.content {
  min-width: 280px;
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
