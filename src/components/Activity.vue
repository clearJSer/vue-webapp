<template>
	<div class="activity-box">
		<my-header title="活 动" :showmenu="showmenu" />
		<div class="list">
			<div class="mask"></div>
			<ul>
				<li v-for="(v,i) in listData">
					<img :src="v.cover" alt="" />
					<p class="title">{{v.title}}</p>
					<div class="hot">HOT</div>
					<div class="like"><span class="likeNum">{{v.like}}</span>❤️</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
  import Header from './Header'
  import axios from 'axios'
  export default{
  	data(){
  		return{
	  		"showmenu":true,
	  		//list列表数据结合
	  		"listData":[]
  		}
  	}
  	,
    components: {
      'my-header': Header
    },
    mounted(){
    	//拉取数据
    	axios({
    		url:'/api/front/activity/list.jsp?startIndex=0&pageSize=10',
    		//url:'/douban/v2/movie/in_theaters',
    		method:'get'
    	})
    	.then(response => {
    		//console.log(response.data.subjects[0].title)
    		//console.log(response.data.data[0].title)
    		this.listData = response.data.data
    	})
    	.catch(err=>{
    		console.log("xxxxx"+err)
    	})
    }
  }
</script>

<style lang="scss">
	@import '../style/usage/app.scss';
	.activity-box{
		width:100%;
		height:100%;
	}
	.list{
		width:100%;
		height:100%;
		overflow:scroll;
		ul{
			li{
				img{
					width:100%;
					height:100%;
				}
				position:relative;
				@include border(0 0 3px 0,black)
				.title{
					position:absolute;
					bottom:0;
					left:0;
					height:0.45rem;
					width:100%;
					background:rgba(255,255,255,0.8);
					font-size:.14rem;
					font-weight:900;
					text-align:center;
					line-height:0.45rem
				}
				.like{
					position:absolute;
					top:0.1rem;
					right:0;
					height:0.25rem;
					width:0.6rem;
					@include border-radius(0.3rem)
					background:rgba(153,153,153,0.5);
					.likeNum{
						color:#fff;
						line-height:0.25rem;
					}
				}
				.hot{
					position:absolute;
					top:0;
					left:0.1rem;
					width:0.5rem;
					height:0.16rem;
					background:red;
					color:#fff;
					font-size:0.14rem;
					line-height:0.16rem;
					text-align:center;
					@include border-radius(0 0 0.08rem 0.08rem)
				}
			}
		}
	}
</style>