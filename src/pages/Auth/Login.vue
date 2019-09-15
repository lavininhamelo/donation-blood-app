<template>
  <div class="form-login full-width text-center">
    <span
      id="title-name"
      class="block full-width q-mb-xl"
    >Login</span>
    <div class="
      full-width
      q-px-lg
      wrapper-border">
      <form
        id="form"
        v-on:submit.prevent="login()"
      >

        <q-input
          outlined
          v-model="email"
          label="Email"
          class="q-mb-md"
          bg-color="white"
          color="#EA5A44"
        />
        <q-input
          type="password"
          outlined
          v-model="password"
          label="Senha"
          color="#EA5A44"
          bg-color="white"
          class="q-mb-lg wrapper-border"
        />
        <q-btn
          type="submit"
          color="primary"
          label="ENTRAR"
          class="full-width btn-login wrapper-border"
        />
      </form>
      <small class="text-subtitle2 q-mt-md block full-width ">Esqueceu sua senha?</small>
    </div>

  </div>

</template>
<script>
import { firebase, db, auth } from '../../config/firebase'
import Router from 'vue-router'

export default {
  name: "Login",
  data () {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    login () {
      const r = this;
      auth.signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
          r.$router.push('/profile')
        })
        .catch(function (error) {
          const e = `${error.code} - ${error.message}`;
          console.log(e);
        });
    }
  },
  mounted () {
    console.log(firebase);
  }
};
</script>
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
.q-layout {
  position: absolute;
  background-repeat: no-repeat;
  background-image: url("../../statics/layout/login/base.svg");

  background-size: 100%;
  background-color: white !important;
  bottom: 0;
  left: 0;
  top: auto;
  background-position-y: 100%;
}
</style>
