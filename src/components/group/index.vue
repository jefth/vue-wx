<template>
  <div>
    <div class="weui_cells_title" v-if="title" :style="{color:titleColor}" v-html="title"></div>
    <div class="weui_cells" :class="{'no_group_title':!title}" :style=componentStyle>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import GroupTitle from '../group-title/'

export default {
  components: {
    GroupTitle
  },
  props: {
    title: String,
    titleColor: String,
    componentStyle:{
      type:Object,
      required: false,
      default:function(){
        return {}
      }
    }
  }
}
</script>

<style>
.no_group_title {
  margin-top:15px;
}
</style>
