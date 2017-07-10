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
	@import './style/usage/app.scss';
	@font-face {
	  font-family: 'yofont';
	  src: url('./assets/iconfont.woff') format('woff'),
	       url('/assets/iconfont.ttf') format('truetype');
	}
	#app {
	  height:100%;
	  width:100%;
	  
	}
</style>
