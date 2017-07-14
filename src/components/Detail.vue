<template>
	<div class="detail-box">
		<my-header title="活 动 详 情" :showmenu="showmenu" />
		{{aid}}
	</div>
</template>

<script>
   import Header from './Header'
	export default{
		data(){
			return{
				"showmenu" :false,
				"aid":this.$route.params.aid
			}
		},
		components:{
			'my-header' : Header
		},
		mounted(){
			console.log(this.$route.params.aid)
		}
	}
</script>

<style >
	
</style>