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

