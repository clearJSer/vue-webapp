<template>
  <div class="start-box" @click.stop="addTime">
  		<p class="close" @click.stop="close">X</p>
		<section class="body">
			<p class="slideInLeft">轻触空白区域增加10s</p>
			<div class="num-box slideInLeft">
				<div class="big circle">
					<div class="small">
						
					</div>
				</div>
				<div class="nums bounceIn" >{{number}}</div>
			</div>
			<div class="btn slideInLeft" @click.stop="start">START</div>
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
      showmenu: false,
      number:10,
      ani:false
    }
  },
  methods : {
  	
  	start(){
  	   this.$router.push({name:'Home'})
  	},
  	addTime(){
  		this.number += 10;
  		this.ani  = true
  	},
  	close(){
  		this.$router.go(-1)
  	}
  },
  mounted(){

  	var timer =setInterval(()=>{
  		--this.number;
  		if(this.number == 0){
        this.$router.push({name:'Home'})
  			clearInterval(timer);
  		}
  	},1000)
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
  		.num-box{
  			width:1.8rem;
  			height:1.8rem;
  			position:relative;
  		    @include  border-radius(50%);
  		    border:4px solid rgba(255,255,255,.6);
  		    margin:.8rem 0;
  		    .big{
  		    	width:200%;
  		    	height:200%;
  		    	@include border-radius(50%)
  		    	border: 1px solid rgba(255,255,255,.4);
  		    	position:absolute;
  		    	left:-50%;
  		    	top:-50%;
  		    	.small{
					width:50%;
	  		    	height:50%;
	  		    	@include border-radius(50%)
	  		    	border: 1px solid rgba(255,255,255,.4);
	  		    	position:absolute;
	  		    	left:25%;
	  		    	top:25%;
  		    	}
  		    }
  		    .nums{
  		    	width:100%;
  		    	height:100%;
	  		    text-align:center;
	  		    line-height:1.8rem;
	  		    font-size:.8rem;
	  		    color:#fff;
  		    }
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
  @keyframes bounceIn {
	  from, 20%, 40%, 60%, 80%, to {
	    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
	  }

	  0% {
	    opacity: 0;
	    transform: scale3d(.3, .3, .3);
	  }

	  20% {
	    transform: scale3d(1.1, 1.1, 1.1);
	  }

	  40% {
	    transform: scale3d(.9, .9, .9);
	  }

	  60% {
	    opacity: 1;
	    transform: scale3d(1.03, 1.03, 1.03);
	  }

	  80% {
	    transform: scale3d(.97, .97, .97);
	  }

	  to {
	    opacity: 1;
	    transform: scale3d(1, 1, 1);
	  }
 }

.bounceIn {
  animation: bounceIn 1s infinite ;
}
@keyframes slideInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideInLeft {
  animation: slideInLeft 1s ;
}
.circle{
	-webkit-animation:circle 1s linear 1s infinite;
	animation:circle 1s linear 1s infinite;
}
@-webkit-keyframes circle{ /* Safari and Chrome */
	from{
		-webkit-transform:scale(0);
	}
	to{
		-webkit-transform:scale(3);
	}
}
</style>
