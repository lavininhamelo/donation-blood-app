<template>
  <div>
    <div class="content absolute-center">
      <h4>Bem vindo (a)</h4>
      <p>É um grande passo querer ajudar pessoas, com isso tornamos o mundo o lugar melhor. Vamos precisar fazer algumas perguntinhas para preparar o aplicativo para você, ok?</p>
      <q-btn
        rounded
        text-color="primary"
        color="white"
        class="full-width q-mt-xl"
        label="COMEÇAR"
        style="height:45px;"
        @click="$router.push('register/step/1')"
      />
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.content {
  min-width: 250px;
}

p {
  text-align: justify;
  line-height: 30px;
}
</style>
