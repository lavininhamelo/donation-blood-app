<template>
  <div>
    Register
    <form id="form" v-on:submit.prevent="singup()">
      <input type="email" v-model="email" placeholder="email@email.com" />
      <input type="password" v-model="password" />
      <input type="submit" value="Register" />
    </form>
  </div>
</template>

<script>
import {firebase, db, auth} from '../../config/firebase'
import Router from 'vue-router'

export default {
  name: "Register",
  data() {
    return {
      email:null,
      password: null
    };
  },
  methods: {
    singup() {
        const r = this;
        auth.createUserWithEmailAndPassword(this.email, this.password)
        .then((user)=> {
            console.log(user)
            r.$router.push('/profile') 
        })
        .catch(function(error) {
          const e = `${error.code} - ${error.message}`;
          console.log(e);
        });
    }
  },
  mounted() {
    console.log(firebase);
  }
};
</script>

<style>
</style>