<template >

  <div class="flex">
    <div class="row text-center text-white full-width q-mb-xs">

      <q-icon
        name="img:statics/main/logo.png"
        size="68px"
        class="blood-icon"
        color="white"
        style="margin:0 auto;"
      />
      <h1 class="full-width text-center">iBlood</h1>
    </div>
    <div class="buttons-group row q-mt-lg full-width justify-center">
      <q-btn
        text-color="red"
        label="Fazer Login"
        class="btn-login full-width rounded-borders q-mb-sm"
      />
      <q-btn
        outline
        color="white"
        label="Criar Conta"
        class="btn-create-account full-width rounded-borders"
      />
      <!-- <small class="full-width text-center text-white q-mt-sm">Doe vida, doe sangue!</small> -->
    </div>
  </div>

</template>

<script>

</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&display=swap");
.buttons-group {
  position: absolute;
  top: 220px;
}
h1 {
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 22px;
}
.btn-create-account {
  min-height: 45px !important;
  max-width: 215px;
  font-size: 14px !important;
  border: 2px solid #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-weight: 500;
}
.btn-login {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  min-height: 45px !important;
  max-width: 215px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px !important;
}
</style>