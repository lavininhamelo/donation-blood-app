<template>
  <div>
    <div class="content register absolute-center">
      <h5>Bem vindo (a)</h5>
      <p>É um grande passo querer ajudar pessoas, com isso tornamos o mundo o lugar melhor. Vamos precisar fazer algumas perguntinhas para preparar o aplicativo para você, ok?</p>
      <q-btn
        rounded
        text-color="primary"
        color="white"
        class="full-width q-mt-xl"
        label="INICIAR"
        style="height:45px;"
        @click="$router.push('register/step/1')"
      />
    </div>
  </div>
</template>
<script>
export default {
  //Erase all data in store to prevent get old data.
  created: function() {
    this.$store.dispatch("register/eraseAllData");
  }
};
</script>
<style lang="stylus">
.content {
  text-align: center !important;
}

.register {
  min-width: 250px;
}

p {
  text-align: justify;
  line-height: 30px;
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

h5 {
  font-size: 18pt;
}
</style>
