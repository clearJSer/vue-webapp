<template>
	<div class="medal-box">
		<div class="top">
			<img src="../assets/images/medal.png" alt="">
			<div class="btn" @click.stop="showMenu"></div>
		</div>
		<div class="menu">
			<ul>
				<li>挑战自我</li>
				<li>阿甘时光</li>
				<li>感恩有你</li>
				<li>炫彩跑图</li>
			</ul>
		</div>
	</div>
</template>

<script>
  import Header from './Header'
	export default{
		data(){
			return{
				
			}
		},
		components:{
		},
		methods:{
			showMenu(){
				 this.$store.commit('vuexOpenMenu')
			}
		}
	}
</script>

<style lang="scss">
@import '../style/usage/app.scss';
.medal-box{
	width:100%;
	height:100%;
	.top{
		position:relative;
		img{
			width:100%;
			height:50%;
		}
		.btn{
			position:absolute;
			top:0.1rem;
			left:0.1rem;
			width:0.5rem;
			height:0.5rem;
		}
	}
	.menu{
		height:0.45rem;
		width:100%;
		background:black;
		ul{
			@include flexbox();
			li{
				color:#ccc;
				font-size:0.18rem;
				heigth:100%;
				line-height:0.45rem;
				width:25%;
				text-align:center;
			}
			li.active{
				border-bottom:3px solid orange;
				
			}
		}
	}
}	
</style>