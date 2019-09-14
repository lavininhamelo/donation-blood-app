<template>
  <div>
    Login
    <form
      id="form"
      v-on:submit.prevent="login()"
    >
      <input
        type="email"
        v-model="email"
        placeholder="email@email.com"
      />
      <input
        type="password"
        v-model="password"
      />
      <input
        type="submit"
        value="Login"
      />
    </form>

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
</style>