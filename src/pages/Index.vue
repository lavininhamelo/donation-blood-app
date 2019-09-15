<template >

  <div class="main-form flex justify-center">
    <div class="row text-center text-white">
      <q-icon
        name="img:statics/main/logo.png"
        size="68px"
        class="blood-icon"
        color="white"
        style="margin:0 auto;"
      />
      <h1 class="full-width">iBlood</h1>
      <div class="buttons-group full-width items-center">

        <q-btn
          text-color="red"
          label="Fazer Login"
          class="btn-login  full-width rounded-borders"
          to="/login"
        />
        <q-btn
          outline
          color="white"
          label="Criar Conta"
          class="btn-create-account full-width rounded-borders q-mt-md"
        />
      </div>
    </div>

  </div>

</template>

<script>

</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&display=swap");
.buttons-group {
  position: relative;
  top: 50px;
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
.q-layout {
  background: -moz-linear-gradient(
    45deg,
    rgba(207, 53, 29, 1) 0%,
    rgba(207, 53, 29, 1) 1%,
    rgba(234, 96, 80, 1) 100%
  ); /* ff3.6+ */
  background: -webkit-gradient(
    linear,
    left bottom,
    right top,
    color-stop(0%, rgba(207, 53, 29, 1)),
    color-stop(1%, rgba(207, 53, 29, 1)),
    color-stop(100%, rgba(234, 96, 80, 1))
  ); /* safari4+,chrome */
  background: -webkit-linear-gradient(
    45deg,
    rgba(207, 53, 29, 1) 0%,
    rgba(207, 53, 29, 1) 1%,
    rgba(234, 96, 80, 1) 100%
  ); /* safari5.1+,chrome10+ */
  background: -o-linear-gradient(
    45deg,
    rgba(207, 53, 29, 1) 0%,
    rgba(207, 53, 29, 1) 1%,
    rgba(234, 96, 80, 1) 100%
  ); /* opera 11.10+ */
  background: -ms-linear-gradient(
    45deg,
    rgba(207, 53, 29, 1) 0%,
    rgba(207, 53, 29, 1) 1%,
    rgba(234, 96, 80, 1) 100%
  ); /* ie10+ */
  background: linear-gradient(
    45deg,
    rgba(207, 53, 29, 1) 0%,
    rgba(207, 53, 29, 1) 1%,
    rgba(234, 96, 80, 1) 100%
  ); /* w3c */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#EA6050', endColorstr='#CF351D',GradientType=1 ); /* ie6-9 */
}
</style>