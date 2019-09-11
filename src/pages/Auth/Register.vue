<template>
  <div>
    Register
    <form id="form" v-on:submit.prevent="singup()">
      E-mail: <input type="email" v-model="email" placeholder="email@email.com" />
      Password: <input type="password" v-model="password" />
      First Name:<input type="text" v-model="first_name" />
      Last Name: <input type="text" v-model="last_name" />
      Blood Type: <input type="text" v-model="blood_type" />
      Years: <input type="text" v-model="years" />
      Your bio: <input type="text" v-model="bio" />
      <input type="submit" value="Register" />
    </form>
  </div>
</template>

<script>
import { firebase, db, auth } from "../../config/firebase";
import Router from "vue-router";

export default {
  name: "Register",
  data() {
    return {
      email: null,
      password: null,
      first_name: null,
      last_name: null,
      blood_type: null,
      years: null,
      bio: null
    };
  },
  methods: {
    singup() {
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(created => {
          return db.collection("Users")
            .doc(created.user.uid)
            .set({
              email: this.email,
              password: this.password,
              first_name: this.first_name,
              last_name: this.last_name,
              blood_type: this.blood_type,
              years: this.years,
              bio: this.bio
            });
            this.$router.push("/profile");
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