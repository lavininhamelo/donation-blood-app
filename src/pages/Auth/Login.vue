<template>
  <div class="form-login full-width text-center">

    <header class="">
      <span
        id="title-name"
        class="block full-width "
      >iBlood</span>
      <small>Doe vida, doe sangue!</small>
    </header>
    <div class="
      q-px-xl
      full-width
      ">
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
        >
          <template v-slot:prepend>
            <q-icon
              color="primary"
              name="o_email"
              size="15px"
            />
          </template></q-input>

        <q-input
          type="password"
          outlined
          v-model="password"
          label="Senha"
          bg-color="white"
          class="q-mb-md "
        >
          <template v-slot:prepend>
            <q-icon
              color="primary"
              name="o_lock"
              size="15px"
            />
          </template>
        </q-input>
        <div
          class="row q-mb-md q-mt-none"
          style="float:right"
        >

          <small class="last-pass">Esqueceu a senha?</small>
        </div>
        <q-btn
          type="submit"
          color="primary"
          label="Fazer Login"
          class="full-width btn-login wrapper-border"
        />
      </form>
      <div class="donthave row text-center full-width block q-mt-lg">
        <small>Não possui uma conta? <span>Criar conta</span></small>
      </div>
      <div class="q-mt-lg items-center footer-other">
        <div class="line"></div><span class="q-mx-md">ou</span>

      </div>
      <div class="row q-gutter-xs q-mt-md">

        <div class="col">
          <q-icon
            name="img:statics/layout/facebook.svg"
            size="32px"
            class="full-width"
          />
        </div>
        <div class="col">
          <q-icon
            name="img:https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            size="30px"
            class="full-width"
          />
        </div>
        <div class="col">
          <q-icon
            name="img:statics/layout/instagram.svg"
            size="32px"
            class="full-width"
          />
        </div>
      </div>
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

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.donthave small {
  color: $text !important;
  font-weight: bold;
  font-font-family: Roboto;
}

div.footer-other span {
  // display: inline-block;
  position: absolute;
  left: calc(50% - (55px / 2));
  width: 25px;
  margin-top: 2px;
  background-color: white;
  color: $placeholder;
}

small span {
  color: $primary;
  font-weight: 500;
}

div.line {
  border: 1px solid $placeholder;
  width: 100%;
  height: 1px;
  display: inline-block;
}

header {
  margin-top: 0%;
  margin-bottom: 30%;
}

.last-pass {
  color: $primary;
  /* ESQUECEU A SENHA? */
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
}

div small {
  /* Doe vida, doe sangue */
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: $text;
}

span#title-name {
  /* Login */
  font-family: Roboto;
  color: $primary;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  /* identical to box height, or 92% */
}

.btn-login {
  min-height: 45px !important;
}

.q-field__control:before {
  border-color: $placeholder !important;
}

.input-blood {
  max-height: 50px;
}

.q-field__label {
  color: $placeholder !important;
}
</style>
