<template>
  <div
    class="radio flex items-center justify-center"
    :class="{selected:isSelected}"
    v-on:click="toggleSelected()"
  >
    <span>{{value}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return { isSelected: false };
  },
  props: ["index", "value"],
  methods: {
    toggleSelected() {
      this.$emit("onSelectedWasClicked", this);
    }
  }
};
</script>

<style lang="stylus">
.selected {
  background-color: white;
  color: $primary;
}

div.radio {
  font-weight: bold;
  width: 48px;
  height: 48px;
  border: 2px solid #fff;
  border-radius: 3px;
  -webkit-appearance: none;
}
</style>