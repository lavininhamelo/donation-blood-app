<template leave-active-class="animated fadeOut">
  <q-layout view="lhr lpr lfr">
    <transition
      name="transitions"
      mode="out-in"
    >
      <q-page-container>

        <router-view class="absolute-center full-width" />

      </q-page-container>
    </transition>
  </q-layout>
</template>
