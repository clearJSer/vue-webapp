<template>
	<div class="running" :style="loading"></div>
</template>

<script>
	export default{
		data(){
			return{

		  		loading:{
		  			backgroundImage: "url(" + require("../../assets/images/nloading.png") + ")",
		  			width:'48px',
		  			height:'45px'
		  		}
			}
		}
	}
</script>

<style lang="scss">
	@import '../../style/usage/app.scss';
	.running{
		animation: run 0.6s steps(16,end)  infinite;
	}
	@-webkit-keyframes run{
	   0%{background-position: 0 0}
	   // 6.25% {background-position: -48px 0;}
	   // 12.25% {background-position: -96px 0;}
	   // 18.75% {background-position: -144px 0;}
	   // 25% {background-position: -192px 0;}
	   // 31.25% {background-position: -240x 0;}
	   // 37.5% {background-position: -288px 0;}
	   // 43.75% {background-position: -336px 0;}
	   // 50% {background-position: -384px 0;}
	   // 56% {background-position: -432px 0;}
	   // 62.5% {background-position: -480px 0;}
	   // 68.75% {background-position: -528px 0;}
	   // 75% {background-position: -576px 0;}
	   // 81.25% {background-position: -624px 0;}
	   // 87.5% {background-position: -672px 0;}
	   // 93.75% {background-position: -720px 0;}  
	   100%{background-position: -768px 0}    
   }
</style>