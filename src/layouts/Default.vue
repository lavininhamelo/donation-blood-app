<template>
  <q-layout view="lhr lpr lfr">
    <transition
      name="transitions"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <q-page-container>

        <router-view class="absolute-center full-width" />

      </q-page-container>
    </transition>
  </q-layout>
</template>
