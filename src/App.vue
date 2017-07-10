<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './style/usage/core/reset.scss';
@import './style/usage/module/common.scss';

#app {
  height:100%;
  width:100%;
  
}
</style>
