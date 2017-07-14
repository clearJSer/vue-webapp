<template>
  <div class="go-box">
 	 <my-header title="GPS启动..."  :showmenu="showmenu" />
 	 <section class="go-body">
 	 	<div class="header">
 	 	 <img src="../../assets/images/eye.png" alt="">
 	 	 <p >隐藏实时路线</p>
 	     <mt-switch ></mt-switch>
 	 	</div>
 	 	<div class="other-login">
 	 		<img src="../../assets/images/go-1.png" style="width:100%;height:100%" alt="">
 	 	</div>
 	 	<div class="header">
 	 	 <img src="../../assets/images/go-2.png" alt="">
 	 	 <p >运动前热身训练</p>
 	    <div ><a href="javascript:;" class="dohot" @click.stop="hotbody">&gt;</a></div>
 	 	</div>
 	 <div class="btn-box">
 	 	<div class="btn" @click.stop="start">开始跑步</div>
 	 </div>
 	 </section>
  </div>
</template>

<script>
import Header from '../Header'
import { Switch } from 'mint-ui';
import Vue from 'vue';
Vue.component(Switch.name, Switch);
export default {
  name: 'go',
  components:{
  	'my-header' : Header
  },
  data () {
    return {
      showmenu: false
    }
  },
  methods : {
  	hotbody(){
  		console.log(1)
  	},
  	start(){
  	   this.$router.push({name:'Start'})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../style/usage/app.scss';
  .go-box{
  	width:100%;
  	height:100%;
  	@include flexbox()
  	@include flex-direction(column)
  	.go-body{
		@include flex()
		width:100%;
		.header{
			padding:0 .1rem;
			width:100%;
			height:.6rem;
			background:#fff;
			@include flexbox()
			@include justify-content(center)
			@include align-items(center)
			img{
				width:.3rem;
				height:.3rem;
			}
			p{
				@include flex()
				padding-left:.05rem;
			}
		}
		.other-login{
			margin:.15rem 0;
		}
		.dohot{
			font-size:.26rem;
			padding-right:.1rem;
		}
		.btn-box{
			margin-top :1rem;
			@include flexbox()
			@include justify-content(center)
			@include align-items(center)
			.btn{
			  width:1.7rem;
	          height:0.6rem;
	          border:2px solid #fff;
	          @include  border-radius(0.3rem);
	          background: #fc782e;
	          text-align:center;
	          line-height:0.6rem;
	          color:#fff;
	          font-size:0.16rem;
			}
		}
  	}
  }
</style>
