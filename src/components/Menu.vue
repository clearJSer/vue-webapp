<template lang="html">
	<div class="menu-box">
		<header>
			<a href="" class='userHeader'>&nbsp;这里是头像</a>
			<dl>
				<dt>红色柠檬</dt>
				<dd><img src="../assets/images/vip.jpg" alt=""></dd>
			</dl>
		</header>
		<section>
			<ul>
				<li><span class="yo-ico menu-ico">&#xe601;</span><span>运  动</span></li>
				<li><span class="yo-ico">&#xf02be;</span><span>运  动</span></li>
				<li><span class="yo-ico">&#xe73c;</span><span>跑友圈</span></li>
				<li><span class="yo-ico">&#xe77d;</span><span>训练计划</span></li>
				<li><span class="yo-ico">&#xe604;</span><span>活动</span></li>
				<li><span class="yo-ico">&#xe617;</span><span>勋章馆</span></li>
				<li><span class="yo-ico">&#xe678;</span><span>通讯录</span></li>
				<li><span class="yo-ico">&#xe507;</span><span>我的</span></li>
			</ul>
		</section>
	</div>
</template>

<script>
	export default{

	}
</script>

<style lang="scss" scoped>
  @import '../style/usage/app.scss';
  .menu-box{
  	@include flexbox();
  	@include flex-direction(column)
  	width:80%;
  	height:100%;
  	background:#140547;
  	padding-top:.3rem;
  	header{
  		height:.6rem;
  		width:100%;
  		padding-left:0.2rem;
  		@include flexbox();
  		a{
  			display:block;
  			width:.5rem;
  			height:.5rem;
  			background:#fff;
  			@include border-radius(50%)
  		}
  		dl{
  			margin-left:0.2rem;
  			dt{
  				color:#fff;
  				font-size:.14rem;
  			}
  			dd{
  				img{
  					width:0.6rem;
  					height:0.2rem;
  				}
  			}
  		}
  	}

  	section{
  		ul{
  			li{
  				@include flexbox();
  				@include align-items(center)
  				height:0.5rem;
  				width:100%;
				.menu-ico{
					font-size:0.2rem;
				}
  				span{
  					line-height:0.5rem;
  					color:#fff;
  					font-size:0.2rem;
  				}
  			}
  		}
  	}
  	
  }
</style>