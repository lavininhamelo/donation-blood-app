<template>
  <div>
    <div class="text-center q-mt-xl">
      <small class="answer block full-width" style="color: #F59A8C;">Pergunta 2 / 10</small>
      <h5>Qual seu tipo sanguíneo?</h5>
    </div>
    <div class="content absolute-center text-center">
      <SelectesBlood />
    </div>
    <div class="footer absolute-bottom q-px-lg q-mb-xl">
      <q-btn
        rounded
        text-color="primary"
        color="white"
        class="full-width q-mt-xl"
        label="PROXIMA"
        style="height:45px;"
      >
        <q-icon class="absolute-right q-ma-sm" name="keyboard_arrow_right" size="30px" />
      </q-btn>
    </div>
  </div>
</template>
<script>
import SelectesBlood from "../../../components/SelectsBlood.vue";

export default {
  components: { SelectesBlood }
};
</script>
<style lang="stylus" scoped>
.content {
  min-width: 280px;
}

.answer {
  color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  text-transform: uppercase;
}
</style>
