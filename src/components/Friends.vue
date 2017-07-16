<template>
	<div class="friends-box">
		<my-header title="" :showmenu="showmenu" />
		<header class="">
			<a href="javascript:;"><span class="yo-ico camera" @click.stop="photo">&#xe600;</span></a>
			<dl>
				<dt></dt>
				<dd class="username">红色柠檬</dd>
			</dl>
		</header>
		<section>
			<p class="title">推荐好友</p>
		</section>
		<section class="addfriends">
			<ul>
				<li><img src="../assets/images/haoyou.png" alt=""></li>
				<li><img src="../assets/images/haoyou.png" alt=""></li>
				<li><img src="../assets/images/haoyou.png" alt=""></li>
				<li><img src="../assets/images/haoyou.png" alt=""></li>
				<li><img src="../assets/images/haoyou.png" alt=""></li>
				<li><img src="../assets/images/haoyou.png" alt=""></li>
				<li><img src="../assets/images/haoyou.png" alt=""></li>
				<li><img src="../assets/images/haoyou.png" alt=""></li>
				<li><img src="../assets/images/haoyou.png" alt=""></li>
			</ul>
		</section>
		<mt-actionsheet
		  :actions="actions"
		  v-model="sheetVisible">
		</mt-actionsheet>
	</div>
</template>

<script>
	import Header from './Header'
	import { Actionsheet } from 'mint-ui';
	import Vue from 'vue'
	Vue.component(Actionsheet.name, Actionsheet);
	export default{
		data(){
			return{
				"showmenu":true,
				actions:[
					{name:'拍照',method:this.takephoto},
					{name:'从相册中选择',method:this.takephoto}
				],
				sheetVisible :false
			}
		},
		components:{
			'my-header' : Header
		},
		methods:{
			photo(){
				this.sheetVisible = true
			},
			takephoto(){
				alert("kacha")
			}
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
		.addfriends{
			overflow:scroll;
			ul{
				@include flexbox();
				background:#fff;
				li{
					width:1.5rem;
						height:2.3rem;
					img{
						width:1.5rem;
						height:2.3rem;
					}
				}
			}
		}
 	}
</style>