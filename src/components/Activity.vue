<template>
	<div class="activity-box">
		<my-header title="活 动" :showmenu="showmenu" />
		<div class="list" v-infinite-scroll="loadMore"
					  infinite-scroll-disabled="loading"
					  infinite-scroll-distance="100">
			<div class="mask" v-if="!loaded"></div>
			<ul>
				<li v-for="(v,i) in listData" @click="toDetail(v.aid)">
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
  import { Indicator } from 'mint-ui';
  import { InfiniteScroll } from 'mint-ui';
  import Vue from 'vue';
  Vue.use(InfiniteScroll);
  import 'mint-ui/lib/style.css'
  export default{
  	data(){
  		return{
	  		"showmenu":true,
	  		//list列表数据结合
	  		"listData":[],
	  		"loaded" : false,
	  		"startIndex":0,
	  		"pageSize":10
  		}
  	}
  	,
    components: {
      'my-header': Header
    },
    methods:{
    	toDetail(aid){
    		this.$router.push({name:'detail',params:{aid:aid}})
    	},
    	loadMore() {
    		console.log(111)
		    this.loading = true;
		    this.startIndex += 10;
		 //拉取数据
    	axios({
    		url:`/api/front/activity/list.jsp?startIndex=${this.startIndex}&pageSize=${this.pageSize}`,
    		method:'get'
    	})
    	.then(response => {
    		this.listData = this.listData.concat(response.data.data)
    		 this.loading = false;
    	})
    	.catch(err=>{
    		console.log("加载更多"+err)
    	})
		}
    	
    },
    mounted(){
    	if(!this.loaded){
			Indicator.open({
			  text: '加载中...',
			  spinnerType: 'fading-circle'
			});
    	}
    	//拉取数据
    	axios({
    		url:`/api/front/activity/list.jsp?startIndex=${this.startIndex}&pageSize=${this.pageSize}`,
    		//url:'/douban/v2/movie/in_theaters',
    		method:'get'
    	})
    	.then(response => {
    		//console.log(response.data.subjects[0].title)
    		//console.log(response.data.data[0].title)
    		this.listData = response.data.data
    		this.loaded = true;
    		Indicator.close()
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
		position:relative;
		overflow:scroll;
		.mask{
			position: absolute;
			top:0;
			left:0;
			width:100%;
			height:100%;
			background:rgba(0,0,0,0.5);
			z-index:1000;
		}
		.mint-indicator-wrapper{
			z-index:9999;
		}
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