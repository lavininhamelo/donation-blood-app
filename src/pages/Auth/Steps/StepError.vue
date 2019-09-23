<template>
  <div>
    <h5 class="text-center">Ohh, que pena!</h5>
    <form @submit.prevent="goToNextStep">
      <div class="content absolute-center text-center">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a laborum itaque ab mollitia quisquam reiciendis, expedita asperiores! Hic ea sit non aspernatur repellat doloremque quis officia ducimus pariatur blanditiis.</p>
      </div>
      <div class="footer absolute-bottom q-px-lg q-mb-md">
        <q-btn
          rounded
          type="submit"
          text-color="primary"
          color="white"
          class="full-width"
          label="CONTINUAR"
          style="height:45px;"
        >
          <q-icon class="absolute-right q-ma-sm" name="keyboard_arrow_right" size="30px" />
        </q-btn>
        <q-btn
          outlined
          rounded
          type="submit"
          text-color="white"
          class="full-width q-mt-md let"
          label="Deixar para depois"
          style="height:45px;"
        />
      </div>
    </form>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Error!</div>
        </q-card-section>

        <q-card-section>Por favor, preencha o campo corretamente.</q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<style scoped>
.content {
  min-width: 250px;
}
p {
  text-align: justify;
}
.let:before {
  border: 1px solid rgb(255, 255, 255) !important;
}
</style>