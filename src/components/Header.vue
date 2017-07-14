<template lang="html">
	 <div class="header">
      <a href="javascript:;" @click.stop="openMenu" class="menu" v-if="showmenu === true">
       <span class="yo-ico">&#xe603;</span>
      </a>
       <a href="javascript:;" class="menu" v-else @click="goBack" >
         返回
      </a>
      {{title}}
    </div>
</template>

<script>
	export default{
      props:["title","showmenu"],
      methods:{
        goBack:function(){
          this.$router.go(-1)
        },
        openMenu:function(){
          this.$store.commit('vuexOpenMenu')
        }
      }
	}
</script>

<style lang="scss" scoped>
	@import '../style/usage/app.scss';
	.header{
      text-align:center;
      line-height:0.4rem;
      background:#3d4d6b;
      height:0.6rem;
      width:100%;
      padding-top:0.2rem;
      color:#fff;
      position:relative;
      .menu{
        position:absolute;
        left:0.1rem;
        top:0.2rem;
      }
    }
</style>
