<template>
  <q-layout view="lhr lpr lfr">
    <q-icon
      name="img:statics/layout/back_button.svg"
      class="absolute-top-left q-my-xl q-ml-md"
      size="32px"
      @click="$router.push('/')"
    />
    <q-page-container>
      <router-view
        class="absolute-center full-width"
        style="margin-top:-10px"
      />
    </q-page-container>

  </q-layout>
</template>
