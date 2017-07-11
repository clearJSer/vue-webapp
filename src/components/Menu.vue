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
				<li class="active">
				 <span class="yo-ico menu-ico">&#xe601;</span><span class="name">运  动</span>
				</li>
				<li>
				 <span class="yo-ico menu-ico">&#xf02be;</span><span class="name">跑步历史</span>
				</li>
				<li>
				 <span class="yo-ico menu-ico">&#xe73c;</span><span class="name">跑 友 圈</span>
				</li>
				<li>
				 <span class="yo-ico menu-ico">&#xe77d;</span><span class="name">训练计划</span>
				</li>
				<li>
				 <span class="yo-ico menu-ico">&#xe604;</span><span class="name">活 动</span>
				</li>
				<li>
				 <span class="yo-ico menu-ico">&#xe617;</span><span class="name">勋 章 馆</span>
				</li>
				<li>
				 <span class="yo-ico menu-ico">&#xe678;</span><span class="name">通 讯 录</span>
				</li>
				<li>
				 <span class="yo-ico menu-ico">&#xe507;</span><span class="name">我  的</span>
				</li>
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
  $menu-background :#33333b;
  .menu-box{
  	@include flexbox();
  	@include flex-direction(column)
  	width:80%;
  	height:100%;
  	background:$menu-background;
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
  				@include border(0 0 0 8px,$menu-background)
  				padding-left:0.2rem;
  				height:0.5rem;
  				width:100%;
				.menu-ico{
  					margin-right:0.1rem;
					font-size:0.2rem;
				}
				.name{
					line-height:.3rem;
					margin-top:0.04rem;
				}
  				span{
  					color:#fff;
  					font-size:0.2rem;
  				}
  			}
  			li.active{
  				background:#666;
  				@include  border(0 0 0 8px,orange);
  			}
  		}
  	}
  	
  }
</style>