<template>
  <q-layout view="lhr lpr lfr">
    <q-icon
      name="img:statics/layout/back_button.svg"
      class="absolute-top-left q-my-xl q-ml-md"
      size="32px"
    />
    <q-page-container>
      <router-view
        class="absolute-center full-width"
        style="margin-top:-10px"
      />
    </q-page-container>

  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutAuths',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    openURL
  }
}
</script>
<style >
div#q-app {
  position: absolute;
  background-repeat: no-repeat;
  background-image: url("../../statics/layout/login/base.svg");
  height: 100%;
  width: 100%;
  background-color: white !important;
  bottom: 0;
  left: 0;
  top: auto;
  background-position-y: 100%;
}
</style>
