<template>
  <div>
    <SelectSquared
      v-for="blood of bloodTypes"
      :key="blood"
      :value="blood"
      class="flex inline q-ma-sm"
    />
  </div>
</template>

<script>
import SelectSquared from './SelectSquared';
export default {
  data () {
    return {
      'bloodTypes': ['A +', 'A -', 'B +', 'B -', 'AB +', 'AB -', 'O +', 'O -']
    }
  },
  components: { SelectSquared }
}
</script>

<style>
</style>