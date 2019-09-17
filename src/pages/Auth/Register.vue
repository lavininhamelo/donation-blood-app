<template>
  <div>
    <div class="content absolute-center">
      <h4>Bem vindo (a)</h4>
      <p>Obrigado por querer ajudar mais pessoas, com isso tornamos o mundo um lugar melhor. Precisaremos fazer algumas perguntas afim de melhorar a experiência no app. Ok?</p>
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