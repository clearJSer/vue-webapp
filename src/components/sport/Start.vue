<template>
  <div class="start-box">
  		<p class="close">X</p>
		<section class="body">
			<p class="">轻触空白区域增加10s</p>
			<div class="nums">10</div>
			<div class="btn">START</div>
		</section>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'go',
  components:{
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
  .start-box{
  	width:100%;
  	height:100%;
  	background:#fc782e;
  	@include flexbox();
  	@include justify-content(center)
  	@include align-items(center)
  	position:relative;
  	.close{
  		position:absolute;
  		top:.2rem;
  		right:.3rem;
  		font-size:.2rem;
  		color:#fff;
  		opacity:0.5
  	}
  	.body{
  		width:1.9rem;
  		height:5rem;
  		@include flexbox();
  		@include flex-direction(column)
  		p{
  			font-size:0.16rem;
  			color:#fff;
  			text-align:center
  		}
  		.nums{
  			width:1.8rem;
  			height:1.8rem;
  			@include border-radius(.9rem)
  			@include border(10px #fff solid)
  		}
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
</style>
