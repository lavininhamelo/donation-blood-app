<template>
  <div class="radio flex items-center justify-center">
    <span>{{value}}</span>
  </div>
</template>

<script>
export default {
  props: ['value', 'selected']
}
</script>

<style lang="stylus">
.selected {
  background-color: white;
  color: $primary;
}

div.radio {
  font-weight: bold;
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 3px;
  -webkit-appearance: none;
}
</style>