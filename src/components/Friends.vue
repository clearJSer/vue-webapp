<template>
	<div class="friends-box">
		<my-header title="" :showmenu="showmenu" />
		<header class="">
			<a href=""><span class="yo-ico camera">&#xe600;</span></a>
			<dl>
				<dt></dt>
				<dd class="username">红色柠檬</dd>
			</dl>
		</header>
		<section>
			<p class="title">推荐好友</p>
		</section>
	</div>
</template>

<script>
	import Header from './Header'
	export default{
		data(){
			return{
				"showmenu":true
			}
		},
		components:{
			'my-header' : Header
		}
	}
</script>

<style lang="scss">
	@import '../style/usage/app.scss';
	.friends-box{
		header{
			width:100%;
			height:2.2rem;
			background:#ac5324;
			positon:relative;
			@include flexbox()
			@include justify-content(center)
			@include align-items(center)
			dl{
				width:0.8rem;
				height:1rem;
				dt{
					width:.9rem;
					height:.9rem;
					background:#fff;
					@include border-radius(50%)
				}
				dd{
					height:.6rem;
					line-height:.6rem;
					text-align:center;
					color:#fff;
					font-size:.2rem;
				}
			}
			span{
				position:absolute;
				top:0.1rem;
				right:0.1rem;
				font-size:0.28rem;
			}
		}
		section{
			.title{
				margin:0.1rem 0;
				padding-left:.1rem;
				font-size:.16rem;
			}
		}
 	}
</style>