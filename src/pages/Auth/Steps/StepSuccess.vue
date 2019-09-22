<template>
  <div>
    <div class="content absolute-center text-center">
      <h4>Muito Bem!</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, numquam placeat dicta doloremque,</p>
      <p>ex eius repellendus incidunt tenetur eveniet inventore provident repellat facere beatae ea vitae iure harum cumque natus?</p>
      <q-btn
        rounded
        type="submit"
        text-color="primary"
        color="white"
        class="full-width q-mt-xl"
        label="Doar"
        style="height:45px;"
      >
        <q-icon class="absolute-right q-ma-sm" name="keyboard_arrow_right" size="30px" />
      </q-btn>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.content {
  min-width: 250px;
}

h4 {
  font-size: 25pt;
}

p {
  text-align: justify;
  line-height: 30px;
}
</style>
