<template>
  <div>
    <div class="text-center q-mt-lg">
      <small class="answer block full-width" style="color: #F59A8C;">Pergunta 4 / 10</small>
    </div>
    <h5 class="text-center">Você teve alguma infecção nos ultimos 3 meses?</h5>
    <div class="content text-center">
      <SelectYesOrNo />
    </div>
    <div class="footer absolute-bottom q-px-lg q-mb-xl">
      <q-btn
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
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Error!</div>
        </q-card-section>

        <q-card-section>Por favor, selecione se você teve alguma infecção.</q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import SelectYesOrNo from "../../../components/SelectYesOrNo";
export default {
  components: { SelectYesOrNo },
  data() {
    return {
      alert: false,
      name: "",
      options: ["Sim", "Não"]
    };
  },
  computed: {
    hasInfection: {
      get() {
        return this.$store.state.register.hasInfection;
      }
    }
  },
  methods: {
    validateForm() {
      if (this.hasInfection) {
        return true;
      }
      return false;
    },
    //Go to next page
    goToNextStep() {
      if (this.validateForm()) {
        this.$router.push("/register/step/5");
      } else {
        this.alert = true;
      }
    }
  }
};
</script>

