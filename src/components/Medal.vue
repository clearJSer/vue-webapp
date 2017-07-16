<template>
	<div class="medal-box">
		<div class="top">
			<img src="../assets/images/medal.png" alt="">
			<div class="btn" @click.stop="showMenu"></div>
		</div>
		<div class="menu">
			<ul @click="choose">
				<li :class={active:isActive[0]} index="0" >挑战自我</li>
				<li :class={active:isActive[1]} index="1">阿甘时光</li>
				<li :class={active:isActive[2]} index="2">感恩有你</li>
				<li :class={active:isActive[3]} index="3">炫彩跑图</li>
			</ul>
		</div>
		<div class="swiper">
			<mt-swipe :auto="0" :defaultIndex="4" :show-indicators="false" @change="handleChange">
			  <mt-swipe-item>
			  <div class="honour">
			  	<ul class="honour-box">
			  		<li><img src="../assets/images/honer.png" alt=""></li>
			  		<li><img src="../assets/images/honer.png" alt=""></li>
			  		<li><img src="../assets/images/honer.png" alt=""></li>
			  		<li><img src="../assets/images/honer.png" alt=""></li>
			  		<li><img src="../assets/images/honer.png" alt=""></li>
			  		<li><img src="../assets/images/honer.png" alt=""></li>
			  		<li><img src="../assets/images/honer.png" alt=""></li>
			  		<li><img src="../assets/images/honer.png" alt=""></li>
			  		<li><img src="../assets/images/honer.png" alt=""></li>
			  		<li><img src="../assets/images/honer.png" alt=""></li>
			  		<li><img src="../assets/images/honer.png" alt=""></li>
			  		<li><img src="../assets/images/honer.png" alt=""></li>
			  		<li><img src="../assets/images/honer.png" alt=""></li>
			  		<li><img src="../assets/images/honer.png" alt=""></li>
			  		<li><img src="../assets/images/honer.png" alt=""></li>
			  	</ul>
			  </div>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  <div class="honour">
			  	<ul class="honour-box">
			  		<li><img src="../assets/images/honour-2.png" alt=""></li>
			  		<li><img src="../assets/images/honour-2.png" alt=""></li>
			  		<li><img src="../assets/images/honour-2.png" alt=""></li>
			  		<li><img src="../assets/images/honour-2.png" alt=""></li>
			  		<li><img src="../assets/images/honour-2.png" alt=""></li>
			  		<li><img src="../assets/images/honour-2.png" alt=""></li>
			  		<li><img src="../assets/images/honour-2.png" alt=""></li>
			  		<li><img src="../assets/images/honour-2.png" alt=""></li>
			  		<li><img src="../assets/images/honour-2.png" alt=""></li>
			  		<li><img src="../assets/images/honour-2.png" alt=""></li>
			  		<li><img src="../assets/images/honour-2.png" alt=""></li>
			  		<li><img src="../assets/images/honour-2.png" alt=""></li>
			  		<li><img src="../assets/images/honour-2.png" alt=""></li>
			  		
			  	</ul>
			  	</div>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  <div class="honour">
			  	<ul class="honour-box">
			  		<li><img src="../assets/images/honour-3.png" alt=""></li>
			  		<li><img src="../assets/images/honour-3.png" alt=""></li>
			  		<li><img src="../assets/images/honour-3.png" alt=""></li>
			  		<li><img src="../assets/images/honour-3.png" alt=""></li>
			  		<li><img src="../assets/images/honour-3.png" alt=""></li>
			  		<li><img src="../assets/images/honour-3.png" alt=""></li>
			  		<li><img src="../assets/images/honour-3.png" alt=""></li>
			  		<li><img src="../assets/images/honour-3.png" alt=""></li>
			  		<li><img src="../assets/images/honour-3.png" alt=""></li>
			  		<li><img src="../assets/images/honour-3.png" alt=""></li>
			  		<li><img src="../assets/images/honour-3.png" alt=""></li>
			  		<li><img src="../assets/images/honour-3.png" alt=""></li>
			  		<li><img src="../assets/images/honour-3.png" alt=""></li>
			  	</ul>
			  	</div>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  <div class="honour">
			  	<ul class="honour-box">
			  		<li><img src="../assets/images/honour-4.png" alt=""></li>
			  		<li><img src="../assets/images/honour-4.png" alt=""></li>
			  		<li><img src="../assets/images/honour-4.png" alt=""></li>
			  		<li><img src="../assets/images/honour-4.png" alt=""></li>
			  		<li><img src="../assets/images/honour-4.png" alt=""></li>
			  		<li><img src="../assets/images/honour-4.png" alt=""></li>
			  		<li><img src="../assets/images/honour-4.png" alt=""></li>
			  		<li><img src="../assets/images/honour-4.png" alt=""></li>
			  		<li><img src="../assets/images/honour-4.png" alt=""></li>
			  		<li><img src="../assets/images/honour-4.png" alt=""></li>
			  		<li><img src="../assets/images/honour-4.png" alt=""></li>
			  		<li><img src="../assets/images/honour-4.png" alt=""></li>
			  	</ul>
			  	</div>
			  </mt-swipe-item>
			</mt-swipe>
		</div>
	</div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import Vue from 'vue'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
  import Header from './Header'
	export default{
		data(){
			return{
				defaultIndex:1,
				a:true,
				isActive:{
					0:true,
					1:false,
					2:false,
					3:false
				},
				currentIndex:0
			}
		},
		components:{
		},
		computed:{
			activeClass(){

			}
		},
		methods:{
			choose(event){
				var index = parseInt(event.target.getAttribute("index"));
				console.log(index)
				this.defaultIndex = 4;
			},
			showMenu(){
				 this.$store.commit('vuexOpenMenu')
			},
			handleChange(index){
				for(var i in this.isActive){
					this.isActive[i] = false
				}
				this.isActive[index] = true;
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
	.swiper{
		width:100%;
		height:100%;
		background:rgb(41,46,56);
	}
	.honour{
		overflow-y:scroll;
		width:100%;
		height:4.4rem;
		margin-top:.05rem;
	}
	.honour-box{
		@include flexbox()
		@include flex-wrap(wrap) 
		li{	
			width:33%;
			@include flexbox()
			@include justify-content(center)
			margin:.1rem 0 ;
			img{
				width:1rem;
				height:1rem;
			}
		}
	}
}	
</style>