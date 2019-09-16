<template>
  <div>
    <header class="q-gutter-lg q-pr-lg q-mt-xs absolute-top text-center full-width">

      <q-icon
        name="img:statics/layout/back_button.svg"
        size="38px"
        color="white"
        style="float:left"
      />
      <h6>iBlood</h6>
      <q-icon
        name="close"
        size="38px"
        color="white"
        style="float:right"
      />

    </header>
    <div class="content absolute-center">
      <h4>Bem vindo (a)</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis ut quas perferendis repellat facilis expedita unde nostrum culpa quasi iusto adipisci nihil fugit inventore accusamus, quaerat asperiores voluptatem repudiandae!</p>
      <q-btn
        rounded
        text-color="primary"
        color="white"
        class="full-width q-mt-xl"
        label="COMEÇAR"
        style="height:45px;"
      />
    </div>
  </div>
</template>
<style lang="stylus" scoped>
h6 {
  display: inline-block;
  vertical-align: middle;
}

header span {
  line-height: 100%;
  font-weight: 500;
  display: inline-block;
}

.content {
  min-width: 250px;
}

p {
  text-align: justify;
  line-height: 30px;
}
</style>