<template>
  <div>
    Profile
    <a href="#" @click="logout()">Logout</a>
<br><br>
    <img :src="imageProfile" width="100">
    <p>{{first_name}} {{last_name}}, {{years}}, {{blood_type}}</p>
    <p>{{email}}</p>
    <p>{{bio}}</p>
    
  </div>
</template>

<script>
import { firebase, db, auth } from "../../config/firebase";
import Router from "vue-router";

export default {
  name: "Profile",
  data() {
    return {
      email: auth.currentUser.email,
      first_name: null,
      last_name: null,
      blood_type: null,
      years: null,
      bio: null,
      imageProfile: auth.currentUser.photoURL,
      displayName: null
    };
  },
  methods: {
    logout() {
      const r = this;
      auth
        .signOut()
        .then(() => r.$router.push("/login"))
        .catch(function(error) {
          const e = `${error.code} - ${error.message}`;
          console.log(e);
        });
    },
    userData() {
      const user = auth.currentUser;
      if (user) {

        db.collection("Users")
          .doc(user.uid)
          .get()
          .then(doc => {
            this.email = user.email
            this.first_name = doc.data().first_name;
            this.last_name = doc.data().last_name;
            this.displayName = user.displayName;
            this.blood_type = doc.data().blood_type;
            this.years = doc.data().years;
            this.bio = doc.data().bio;
            console.log(user)
          })
          .catch(function(error) {
            const e = `${error.code} - ${error.message}`;
            console.log(e);
          });
      } else {
        this.$router.push("/login");
      }
      
    }
 
  },
   mounted() {
      this.userData();
    }
  }


</script>

<style>
</style>