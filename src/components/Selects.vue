<template>
  <div>
    <SelectSquared
      v-for="(option,index) of options"
      :key="index"
      :value="(option.name)"
      :index="index"
      v-on:onSelectedWasClicked="whenSelecteWasPressed($event,option.value)"
      class="inline q-ma-xs"
    />
  </div>
</template>

<script>
import SelectSquared from "./SelectSquared";
export default {
  props: ["mutationName", "options"],
  data() {
    return {
      indexSelected: null
    };
  },
  components: { SelectSquared },
  methods: {
    //When event is emited then att in store.
    whenSelecteWasPressed(eventComponent, value) {
      if (!this.indexSelected) {
        eventComponent.isSelected = true;
        this.indexSelected = eventComponent;
        this.$store.commit(`register/${this.mutationName}`, value);
      } else if (this.indexSelected.index == eventComponent.index) {
        this.indexSelected = null;
        this.$store.commit(`register/${this.mutationName}`, null);
        eventComponent.isSelected = false;
      } else {
        this.indexSelected.isSelected = false;
        eventComponent.isSelected = true;
        this.indexSelected = eventComponent;
        this.$store.commit(`register/${this.mutationName}`, value);
      }
    }
  },
  created: function() {
    //Force erase old data in store
    this.$store.commit(`register/${this.mutationName}`, null);
  }
};
</script>

<style>
</style>