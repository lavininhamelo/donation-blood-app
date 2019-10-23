<template>
  <div>
    Profile Update
    <a href="#" @click="logout()">Logout</a>
    <br />
    <br />
    <p>{{ first_name }} {{ last_name }}, {{ years }}, {{ blood_type }}</p>
    <img :src="imageProfile" width="100">
    {{imageProfile}}
    <p>{{ bio }}</p>

     <form id="form" v-on:submit.prevent="updateProfile()">
        
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
    name: "Profile",
    data() {
      return {
        email: null,
        first_name: null,
        last_name: null,
        blood_type: null,
        years: null,
        bio: null,
        imageProfile: null
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
              this.blood_type = doc.data().blood_type;
              this.years = doc.data().years;
              this.bio = doc.data().bio;
              this.imageProfile = user.photoURL
            })
            .catch(function(error) {
              const e = `${error.code} - ${error.message}`;
              console.log(e);
            });
        } else {
          this.$router.push("/login");
        }

      },
     updateProfile(){
       var user = auth.currentUser;
       var names = `${this.first_name} ${this.last_name}`
        if(user){
              user.updateProfile({
              displayName: names,
              photoURL: 'https://lh5.googleusercontent.com/-JGKwoYXbj00/AAAAAAAAAAI/AAAAAAAAAAA/5MGrJKuuSEo/W96-H96/photo.jpg'
          }).then(function() {
              console.log('Alterado com Sucesso')
              this.$router.push('/profile')
          }).catch(function(error) {
              const e = `${error.code} - ${error.message}`;
              console.log(e);
          })
        }else this.$router.push('/login')
    }
    },
     mounted() {
        this.userData();
      }
    }
</script>

<style></style>
