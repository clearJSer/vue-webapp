<template>
  <div class="hotsport-box">
 	<my-header title="热身运动"  :showmenu="showmenu" />
 	<section class="warmup">
 		<mt-swipe :auto="0" :continuous="false">
		  <mt-swipe-item >
		  	<div class="page">
		  		<div class="top"><img src="../../assets/images/hotsport/warmup_1_01.png" alt=""></div>
		  		<div class="foot">
		  			<p>腰部拉伸(1/5)</p>
		  			<p>身体两侧各8-10秒</p>
		  		</div>
		  	</div>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<div class="page">
		  		<div class="top"><img src="../../assets/images/hotsport/warmup_2_01.png" alt=""></div>
		  		<div class="foot">
		  			<p>肩部拉伸(2/5)</p>
		  			<p>身体两侧各8-10秒</p>
		  		</div>
		  	</div>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<div class="page">
		  		<div class="top"><img src="../../assets/images/hotsport/warmup_3_01.png" alt=""></div>
		  		<div class="foot">
		  			<p>小腿拉伸(3/5)</p>
		  			<p>身体两侧各8-10秒</p>
		  		</div>
		  	</div>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<div class="page">
		  		<div class="top"><img src="../../assets/images/hotsport/warmup_4_01.png" alt=""></div>
		  		<div class="foot">
		  			<p>大腿拉伸(4/5)</p>
		  			<p>身体两侧各8-10秒</p>
		  		</div>
		  	</div>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<div class="page">
		  		<div class="top"><img src="../../assets/images/hotsport/warmup_3_01.png" alt=""></div>
		  		<div class="foot">
		  			<p>臀部拉伸(5/5)</p>
		  			<p>身体两侧各8-10秒</p>
		  		</div>
		  	</div>
		  </mt-swipe-item>
		</mt-swipe>
 	</section>
  </div>
</template>

<script>
import Header from '../Header'
import { Swipe, SwipeItem } from 'mint-ui';
import Vue from 'vue';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  name: 'hotsport',
  components:{
  	'my-header' : Header
  },
  data () {
    return {
      showmenu: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../style/usage/app.scss';
  .hotsport-box{
  	width:100%;
  	height:100%;
  	@include flexbox()
  	@include flex-direction(column)
  	.warmup{
  		@include flex(1)
  		width:100%;
  		.page{
  			height:100%;
  			width:100%;
  			@include flexbox();
  			@include flex-direction(column)
	  		.top{
	  			width:100%;
	  			height:5rem;
	  			@include justify-content(center)
	  			@include flexbox()
	  			@include align-items(center)
	  			img{
	  				
	  			}
	  		}
	  		.foot{
	  			@include flex(1)
	  			width:100%;
	  			background:black;
	  			@include flexbox()
	  			@include flex-direction(column)
	  			p{
	  				font-size:.16rem;
	  				color:#fff;
	  				text-align:center;
	  				line-height:.5rem;
	  				height:.5rem;

	  			}
	  		}
  		}
  	}
  }
</style>
