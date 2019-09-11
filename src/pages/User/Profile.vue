<template>
    <div>
      Profile
      <a href="#" @click="logout()">Logout</a>
    </div>
</template>

<script>
import {firebase, db, auth} from '../../config/firebase'
import Router from 'vue-router'

export default {
  name: "Profile",
  data() {
    return {
      email:null,
      password: null
    }
  },
  methods: {
    logout() {
        const r = this;
        auth.signOut()
        .then(() =>  r.$router.push('/login'))
        .catch(function(error) {
          const e = `${error.code} - ${error.message}`;
          console.log(e);
        });
    }
  },
}
</script>

<style>
</style>