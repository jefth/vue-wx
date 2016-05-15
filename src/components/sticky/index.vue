<template>
  <div><slot></slot></div>
</template>

<script>
import sticky from './sticky'
export default {
  props: {
    direction:{
      type:String,
      default:'bottom'
    }
  },
  ready () {
    sticky(this.$el,this.direction)
  }
}
</script>

<style>
.vux-sticky-top {
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
.vux-fixed-top {
  width: 100%;
  position: fixed;
  top: 0;
}
.vux-sticky-bottom {
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
}
.vux-fixed-bottom {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
