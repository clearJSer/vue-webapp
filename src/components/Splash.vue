<template lang="html">
	<div class="box">
		<img src="../assets/images/welcome.png"  alt="welcome">
	</div>
</template>

<script>

export default{
	methods:{
		
	},
	mounted(){
	 setTimeout(()=>{
		this.$router.push('/index')
	 },1500)
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