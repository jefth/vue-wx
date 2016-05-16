<template>
  <div>
    <router-view
    transition
    transition-mode="out-in"></router-view>
  </div>
</template>

<script>
import store from './vuex/store'


export default {
  store
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
  background-color: #fbf9fe;
  padding-bottom:50px;
}
</style>
