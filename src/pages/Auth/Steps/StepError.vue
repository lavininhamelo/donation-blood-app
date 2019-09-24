<template>
  <div>
    <h5 class="text-center">Ohh, que pena!</h5>
    <form @submit.prevent="goToNextStep">
      <div class="content absolute-center text-center">
        <p>
          Infelizmente, você não esta apto a fazer doações no momento, pois
          <b>{{infection}}</b>. Mas não se preocupe, você pode continuar seu registro e lhe informaremos sobre necessidades de doações.
        </p>
      </div>
      <div class="footer absolute-bottom q-px-lg q-mb-md">
        <q-btn
          rounded
          type="submit"
          text-color="primary"
          color="white"
          class="full-width"
          label="CONTINUAR"
          style="height:45px;"
        >
          <q-icon class="absolute-right q-ma-sm" name="keyboard_arrow_right" size="30px" />
        </q-btn>
        <q-btn
          outlined
          rounded
          text-color="white"
          class="full-width q-mt-md let"
          label="Deixar para depois"
          style="height:45px;"
          @click="$router.push('/')"
        />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  computed: {
    infection() {
      let cause = "";
      this.$store.getters["register/getReasonReject"].forEach(element => {
        if (element == "kilograms") {
          cause += "seu peso está abaixo de 50 kilogramas";
        }
        if (element == "hasInfection") {
          cause += ", você teve alguma infecção nos ultimos 3 meses";
        }
      });
      return cause;
    }
  },
  methods: {
    goToNextStep() {
      this.$router.push("/register/step/success/email");
    }
  }
};
</script>
<style scoped>
.content {
  min-width: 250px;
}
p {
  text-align: justify;
}
.let:before {
  border: 1px solid rgb(255, 255, 255) !important;
}
</style>