<template>
  <q-layout>
    <header class="q-gutter-lg q-pr-lg q-mt-xs absolute-top text-center full-width">
      <q-icon
        name="img:statics/layout/back_button.svg"
        size="38px"
        color="white"
        style="float:left"
        @click="backButton()"
      />
      <span>iBlood</span>
      <q-icon name="close" size="38px" color="white" style="float:right" v-go-back=" '/'" />
    </header>
    <q-page-container class="q-pa-xl full-width text-white">
      <transition name="transitions" leave-active-class="animated fadeOut" mode="out-in">
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  methods: {
    backButton() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
.q-layout {
  background-color: $primary;
}

header span {
  font-size: 24px;
  display: inline-block;
  line-height: 35px;
  font-weight: 500;
  color: white;
}
</style>
