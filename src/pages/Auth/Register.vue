<template>
  <div class="container">
    Register
    <form id="form" v-on:submit.prevent="singup()">
        
      <br><label>E-mail: </label><input type="email" v-model="email" placeholder="email@email.com" />
      <br><label>Password: </label><input type="password" v-model="password" />
      <br><label>First Name:</label><input type="text" v-model="first_name" />
      <br><label>Last Name: </label><input type="text" v-model="last_name" />
      <br><label>Blood Type: </label><input type="text" v-model="blood_type" />
      <br><label>Years: </label><input type="text" v-model="years" />
      <br><label>Your bio: </label><input type="text" v-model="bio" />
      <br><input type="submit" value="Register" />
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
    updateProfile(){
       var user = auth.currentUser;
        if(user){
       var names = `${this.first_name} ${this.last_name}`

              user.updateProfile({
              displayName: names,
              photoURL: 'https://discountdoorhardware.ca/wp-content/uploads/2018/06/profile-placeholder-3.jpg'
          }).then(function() {
              console.log('Alterado com Sucesso')
              
          }).catch(function(error) {
              const e = `${error.code} - ${error.message}`;
              console.log(e);
          })
        }else this.$router.push('/login')
    },
    singup() {
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(created => {
          db.collection("Users")
            .doc(created.user.uid)
            .set({
              first_name: this.first_name,
              last_name: this.last_name,
              blood_type: this.blood_type,
              years: this.years,
              bio: this.bio
            });
            this.updateProfile();
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