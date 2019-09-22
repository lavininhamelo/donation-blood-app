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
import SelectSquared from "./SelectSquared";
export default {
  data() {
    return {
      indexSelected: null,
      bloodTypes: ["A +", "A -", "B +", "B -", "AB +", "AB -", "O +", "O -"]
    };
  },
  components: { SelectSquared },
  methods: {
    //When event is emited then att in store.
    whenSelecteWasPressed(eventComponent) {
      if (!this.indexSelected) {
        eventComponent.isSelected = true;
        this.indexSelected = eventComponent;
        this.$store.commit("register/setBloodType", eventComponent.value);
      } else if (this.indexSelected.index == eventComponent.index) {
        this.indexSelected = null;
        this.$store.commit("register/setBloodType", null);
        eventComponent.isSelected = false;
      } else {
        this.indexSelected.isSelected = false;
        eventComponent.isSelected = true;
        this.indexSelected = eventComponent;
        this.$store.commit("register/setBloodType", eventComponent.value);
      }
    }
  },
  created: function() {
    //Force erase old data in store
    this.$store.commit("register/setBloodType", null);
  }
};
</script>

<style>
</style>