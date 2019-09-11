<template>
<div>Login</div>
</template>

<script>

import {firebase, db, auth} from '../../config/firebase'

export default {
  data() {
    return {};
  },
  methods: {
      login(){},
      logout(){},
  },
  mounted(){
    console.log(firebase)
  }
};
</script>

<style>
</style>