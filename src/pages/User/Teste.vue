<template>
  <div>
    <div   v-touch-pan.vertical.prevent.mouse="handlePan"
      class="text-white teste " :style="{ top: currentPosition+'px'}"
    >


    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      info: null,
      panning: false,
      currentPosition: 400,
    }
  },

  methods: {
    handlePan ({ evt, ...info }) {
      this.info = info
      console.log(this.currentPosition)
       this.currentPosition =  info.position.top;



      // native Javascript event
      // console.log(evt)

      if (info.isFirst) {
        this.panning = true
      }
      else if (info.isFinal) {
        this.panning = false
      }
    }
  },

}
</script>
<style lang="stylus" scoped>
.teste{
  background: #000;
  width: 600px;
  height: 600px;
  position: absolute;

}
</style>
