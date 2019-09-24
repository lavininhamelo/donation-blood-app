<template>
  <div>
    <h5 class="text-center">Muito Bem!</h5>
    <form @submit.prevent="goToNextStep">
      <div class="content absolute-center text-center">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eaque modi cum delectus! Ea numquam autem veniam inventore eaque dolore consequatur ut, iusto odit aliquid quos soluta, maxime sunt eligendi.</p>
      </div>
      <div class="footer absolute-bottom q-px-lg q-mb-lg">
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