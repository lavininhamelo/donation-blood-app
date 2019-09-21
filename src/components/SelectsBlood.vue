<template>
  <div>
    <SelectSquared
      v-for="(blood,index) of bloodTypes"
      :key="index"
      :value="blood"
      :index="index"
      v-on:onSelectedWasClicked="whenSelecteWasPressed($event)"
      class="flex inline q-ma-sm"
    />
  </div>
</template>

<script>
import SelectSquared from './SelectSquared';
export default {
  data () {
    return {
      'indexSelected': null,
      'bloodTypes': ['A +', 'A -', 'B +', 'B -', 'AB +', 'AB -', 'O +', 'O -']
    }
  },
  components: { SelectSquared },
  methods: {
    whenSelecteWasPressed (eventComponent) {
      if (!this.indexSelected) {
        eventComponent.isSelected = true
      } else {
        this.indexSelected.isSelected = false
        eventComponent.isSelected = true
      }
      this.indexSelected = eventComponent
    }
  }
}
</script>

<style>
</style>