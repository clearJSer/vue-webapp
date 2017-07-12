<template lang="html">
	<div class="box">
		<img src="../assets/images/welcome.png" @click="gotoIndex" alt="welcome">
	</div>
</template>

<script>
	export default{
		methods:{
			gotoIndex:function(){
				this.$router.push('/index')
			}
		}
	}
</script>

<style lang="scss">
	@import '../style/usage/app.scss';
	img{
		width:100%;
	    height:100%;
	}

</style>