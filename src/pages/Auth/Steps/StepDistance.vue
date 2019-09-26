<template>
  <div>
    <div class="text-center q-mt-lg">
      <small
        class="answer block full-width"
        style="color: #F59A8C;"
      >Pergunta 5 / {{this.$store.state.register.totalAswners}}</small>
    </div>
    <h5 class="text-center">O quanto você está disposto a ir para salvar uma vida?</h5>
    <form @submit.prevent="goToNextStep">
      <div class="content text-center">
        <Selects mutationName="setDistanceToDonation" :options="options" />
      </div>
      <div class="footer absolute-bottom q-px-lg q-mb-lg">
        <q-btn
          type="submit"
          rounded
          text-color="primary"
          color="white"
          class="full-width"
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

        <q-card-section>Por favor, selecione a distancia.</q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import Selects from "../../../components/Selects.vue";

export default {
  components: { Selects },
  data() {
    return {
      alert: false,
      options: [
        { value: "high", name: "Longe" },
        { value: "medium", name: "Médio" },
        { value: "low", name: "Perto" }
      ]
    };
  },
  computed: {
    distance: {
      get() {
        return this.$store.state.register.distanceToDonation;
      },
      set(value) {
        this.$store.commit("register/setDistanceToDonation", value);
      }
    }
  },
  methods: {
    //Method to validate our form.
    validateForm() {
      if (this.distance != null) {
        return true;
      } else {
        return false;
      }
    },
    //Go to next page
    goToNextStep() {
      if (this.validateForm()) {
        this.$router.push("/register/step/6");
      } else {
        this.alert = true;
      }
    }
  }
};
</script>

