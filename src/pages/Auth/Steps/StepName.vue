<template>
  <div>
    <div class="text-center q-mt-xl">
      <small class="answer block full-width" style="color: #F59A8C;">Pergunta 1 / 10</small>
      <h5>Qual seu nome ?</h5>
    </div>
    <div class="content absolute-center text-center">
      <q-input v-model="name" type="text" color="white" maxlength="24" dark />
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    goToNextStep() {
      //Aqui coloca a commit pra atualiza ra store com o nome
      this.$router.push("/register/step/2");
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
