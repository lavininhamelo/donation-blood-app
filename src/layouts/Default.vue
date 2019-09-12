<template>
  <q-layout view="lhr lpr lfr">
    <q-page-container>
      <router-view
        class="absolute-center full-width"
        style="margin-top:-80px;"
      />
    </q-page-container>

  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
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
  background: -moz-linear-gradient(
    45deg,
    rgba(207, 53, 29, 1) 0%,
    rgba(207, 53, 29, 1) 1%,
    rgba(234, 96, 80, 1) 100%
  ); /* ff3.6+ */
  background: -webkit-gradient(
    linear,
    left bottom,
    right top,
    color-stop(0%, rgba(207, 53, 29, 1)),
    color-stop(1%, rgba(207, 53, 29, 1)),
    color-stop(100%, rgba(234, 96, 80, 1))
  ); /* safari4+,chrome */
  background: -webkit-linear-gradient(
    45deg,
    rgba(207, 53, 29, 1) 0%,
    rgba(207, 53, 29, 1) 1%,
    rgba(234, 96, 80, 1) 100%
  ); /* safari5.1+,chrome10+ */
  background: -o-linear-gradient(
    45deg,
    rgba(207, 53, 29, 1) 0%,
    rgba(207, 53, 29, 1) 1%,
    rgba(234, 96, 80, 1) 100%
  ); /* opera 11.10+ */
  background: -ms-linear-gradient(
    45deg,
    rgba(207, 53, 29, 1) 0%,
    rgba(207, 53, 29, 1) 1%,
    rgba(234, 96, 80, 1) 100%
  ); /* ie10+ */
  background: linear-gradient(
    45deg,
    rgba(207, 53, 29, 1) 0%,
    rgba(207, 53, 29, 1) 1%,
    rgba(234, 96, 80, 1) 100%
  ); /* w3c */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#EA6050', endColorstr='#CF351D',GradientType=1 ); /* ie6-9 */
}
</style>
