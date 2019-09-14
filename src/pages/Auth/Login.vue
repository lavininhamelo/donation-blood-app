<template>
  <div class="form-login full-width text-center">
    <span
      id="title-name"
      class="block full-width q-mb-xl"
    >Login</span>
    <div class="full-width q-px-lg wrapper-border">
      <q-input
        outlined
        v-model="text"
        label="Email"
        class="q-mb-md"
        bg-color="white"
        color="#EA5A44"
      />
      <q-input
        outlined
        v-model="text"
        label="Senha"
        color="#EA5A44"
        bg-color="white"
        class="q-mb-lg wrapper-border"
      />
      <q-btn
        color="primary"
        label="ENTRAR"
        @click="onClick"
        class="full-width btn-login wrapper-border"
      />
      <small class="text-subtitle2 q-mt-md block full-width ">Esqueceu sua senha?</small>
    </div>

  </div>

</template>
<script></script> 
<style>
span#title-name {
  /* Login */

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  /* identical to box height, or 92% */
}
.btn-login {
  min-width: 215px !important;
  min-height: 45px !important;
}
.q-field__control:before {
  border-color: #ea5a44 !important;
}
.q-field__label {
  color: #ea5a44 !important;
}
</style>
